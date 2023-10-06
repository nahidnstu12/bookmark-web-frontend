import React, { FC, useCallback, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import { FaFilter } from "react-icons/fa6";
import { DatatableFilterFields } from "../../../../common/enum";
import HookFormMuiModal from "../../../Modal/CustomHookFormModal";
import { isBreakPointUp } from "../../../../utils/Utils";
import CustomSelectField from "../../../Inputs/CustomSelectField";
import CustomTextField from "../../../Inputs/CustomTextField";

interface IFilterPopup {
  onClose: any;
  tableInstance: any;
  resetColumnFilters: any;
  columnFilters: any;
  setColumnFilters: any;
}

interface IFilterInputRenderer {
  filterField: DatatableFilterFields;
  id: string;
  label: string;
  register: any;
  defaultValue?: any;
  control?: any;

  [x: string]: any;
}

function FilterInputRenderer({
  filterField,
  defaultValue,
  id,
  register,
  control,
  label,
  ...props
}: IFilterInputRenderer) {
  switch (filterField) {
    case DatatableFilterFields.Select:
      return (
        <CustomSelectField
          required
          id={id}
          label={label}
          defaultValue={defaultValue}
          control={control}
          options={props.options}
          optionValueProp={"id"}
          optionTitleProp={"title"}
        />
      );
    default:
      return (
        <CustomTextField
          defaultValue={defaultValue}
          id={id}
          label={label}
          register={register}
        />
      );
  }
}

const FilterPopup: FC<IFilterPopup> = ({
  onClose,
  tableInstance,
  resetColumnFilters,
  columnFilters,
  setColumnFilters,
}) => {
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: {},
  } = useForm<any>({});

  useEffect(() => {
    let resetValues: any = {};
    for (let i = 0; i < columnFilters.length; i++) {
      resetValues[columnFilters[i].id] = columnFilters[i].value;
    }
    reset(resetValues);
  }, [columnFilters]);

  const handleReset = useCallback(() => {
    resetColumnFilters();
    reset();
    onClose();
  }, [resetColumnFilters]);

  const handleFilterSubmit = (data: any) => {
    const filters = [];
    const dataKeys = Object.keys(data);
    for (let i = 0; i < dataKeys.length; i++) {
      const value = data[dataKeys[i]];

      if (
        (typeof value === "string" && !value.length) ||
        typeof value === "undefined"
      ) {
        continue;
      }

      filters.push({ id: dataKeys[i], value });
    }

    setColumnFilters(filters);
    onClose();
  };

  return (
    <HookFormMuiModal
      onClose={onClose}
      open={true}
      maxWidth={isBreakPointUp("xl") ? "md" : "sm"}
      title={"Filter"}
      handleSubmit={handleSubmit(handleFilterSubmit)}
      actions={
        <>
          <Button variant={"outlined"} onClick={handleReset}>
            Reset
          </Button>

          <Button variant={"outlined"} type="submit">
            Search
          </Button>
        </>
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems={"center"}>
            {tableInstance
              .getHeaderGroups()
              .map((headerGroup: any, index: number) => (
                <React.Fragment key={index}>
                  {headerGroup.headers.map((header: any) => {
                    const filterField = header.column.columnDef?.filterField;
                    const label = header.column.columnDef?.header;
                    const filteredItems =
                      header.column.columnDef?.filteredItems;
                    const columnFilterValue = header.column.getFilterValue();
                    return (
                      <React.Fragment key={header.column.id}>
                        {header.isPlaceholder ? null : (
                          <>
                            {header.column.getCanFilter() ? (
                              <Grid item xs={12} md={6} lg={3}>
                                {
                                  <FilterInputRenderer
                                    register={register}
                                    control={control}
                                    filterField={filterField}
                                    label={label}
                                    defaultValue={columnFilterValue}
                                    options={filteredItems}
                                    id={header.column.id}
                                    key={header.column.id}
                                  />
                                }
                              </Grid>
                            ) : null}
                          </>
                        )}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </HookFormMuiModal>
  );
};

interface IFilterComponent extends Omit<IFilterPopup, "onClose"> {}

const FilterComponent = ({
  columnFilters,
  resetColumnFilters,
  setColumnFilters,
  tableInstance,
}: IFilterComponent) => {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState<boolean>(false);

  const onOpenFilterModal: any = useCallback(() => {
    setIsOpenFilterModal(true);
  }, []);
  const onCloseFilterModal: any = useCallback(() => {
    setIsOpenFilterModal(false);
  }, []);

  return (
    <>
      <IconButton
        aria-label="advance-search"
        sx={{ mx: 3 }}
        onClick={onOpenFilterModal}
      >
        <Badge badgeContent={columnFilters.length} color="secondary">
          <FaFilter color={"primary"} />
        </Badge>
      </IconButton>
      {isOpenFilterModal && (
        <FilterPopup
          columnFilters={columnFilters}
          onClose={onCloseFilterModal}
          tableInstance={tableInstance}
          setColumnFilters={setColumnFilters}
          resetColumnFilters={resetColumnFilters}
        />
      )}
    </>
  );
};

export default FilterComponent;
