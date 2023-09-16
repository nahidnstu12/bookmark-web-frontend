import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ColumnVisibilityComponent from "./ColumnVisibilityComponent";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";
import RefreshTableComponent from "./RefreshTableComponent";

interface Props {
  tableInstance: any;
  setGlobalFilter: any;
  resetColumnFilters: any;
  setColumnFilters: any;
  columnFilters: any;
  onRefreshCallback?: any;
  topBarExtraElement?: any;
}

const TopBar: FC<Props> = ({
  tableInstance,
  setGlobalFilter,
  resetColumnFilters,
  setColumnFilters,
  columnFilters,
  onRefreshCallback,
  topBarExtraElement,
}: Props) => {
  const [isShownFilter, setIsShownFilter] = useState<number>(0);

  useEffect(() => {
    tableInstance.getHeaderGroups().map((headerGroup: any) => {
      headerGroup.headers.map((header: any) => {
        if (header.column.getCanFilter()) {
          setIsShownFilter((prev) => prev + 1);
        }
      });
    });
  }, [tableInstance]);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          padding: "8px 0",
          background: "#fff",
        }}
      >
        <ColumnVisibilityComponent tableInstance={tableInstance} />
        <Box display={"flex"}>
          <SearchComponent setGlobalFilter={setGlobalFilter} />
          {!!isShownFilter ? (
            <FilterComponent
              resetColumnFilters={resetColumnFilters}
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
              tableInstance={tableInstance}
            />
          ) : null}
          {onRefreshCallback && (
            <RefreshTableComponent onRefreshCallback={onRefreshCallback} />
          )}

          {topBarExtraElement && <>{topBarExtraElement}</>}
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
