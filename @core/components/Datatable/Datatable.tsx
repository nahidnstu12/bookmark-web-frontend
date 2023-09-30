import React, { useEffect } from "react";
import {
  ColumnFiltersState,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import {
  Grid,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import { Body1 } from "../Typography/Typography";
import { classes, StyledGridForTable } from "./components/DatatableStyles";
import TopBar from "./components/TopBar/TopBar";
import DataTableContainer from "./components/DatatableContainer";
import { getTableOptions } from "./components/helpers";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { onFetchDataParams } from "../../hooks/useDataTableFetchData";

interface dataTableProps {
  columns: any[];
  tableData: any[];
  fetchData?: (params: onFetchDataParams) => Promise<void>;
  loading?: boolean;
  paginate?: boolean;
  totalCount?: number;
  pageCount?: number;
  toggleResetTable?: boolean;
  handleRowSelectionData?: (data: any) => void;
  showTopBar?: boolean;
  enableRowNumbers?: boolean;
  isStylePrintable?: boolean; //styles applying when table data will be downloaded
  onClickRefresh?: any;
  topBarExtraElement?: any;
}

const pageSizes = [5, 10, 15, 20, 25, 30];

const DataTable: React.FC<any> = ({
  columns,
  tableData: data,
  fetchData,
  loading,
  paginate = true,
  toggleResetTable = false,
  handleRowSelectionData,
  totalCount = data ? data?.length : 0,
  pageCount: controlledPageCount,
  showTopBar = true,
  isStylePrintable = false,
  onClickRefresh,
  enableRowNumbers = true,
  topBarExtraElement,
}: dataTableProps) => {
  const isServerSideTable = typeof fetchData !== "undefined";
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [datatableData, setDatatableData] = React.useState<any[]>(
    () => data || [],
  );
  const [datatableColumns, setDatatableColumns] = React.useState<any[]>(
    () => columns,
  );

  const table = useReactTable<any>(
    getTableOptions({
      isServerSideTable,
      datatableData,
      datatableColumns,
      columnVisibility,
      columnFilters,
      globalFilter,
      rowSelection,
      setRowSelection,
      setColumnVisibility,
      setColumnFilters,
      setGlobalFilter,
      controlledPageCount,
    }),
  ) as any;

  let { resetColumnFilters, getPageCount, previousPage } = table;
  let { pageIndex, pageSize } = table.getState().pagination;
  const sorting = table.getState().sorting;

  useEffect(() => {
    if (!loading) {
      setDatatableData(data);
    }
  }, [data]);

  useEffect(() => {
    if (enableRowNumbers && !loading && data.length) {
      setDatatableColumns([
        {
          id: "#",
          cell: (props: any) =>
            props.row.index + (pageIndex ? pageIndex * pageSize + 1 : 1),
          header: "#",
          enableHiding: false,
        },
        ...columns,
      ]);
    }
  }, [loading, enableRowNumbers, fetchData]);

  useEffect(() => {
    if (
      table &&
      isServerSideTable &&
      getPageCount == 0 &&
      !loading &&
      pageIndex != 0
    ) {
      previousPage();
    }
  }, [table.getPageCount, loading, pageIndex, toggleResetTable]);

  useEffect(() => {
    let selectedIds = Object.keys(rowSelection);
    let items = [...datatableData];
    const selectedData = items.filter((item, number) =>
      selectedIds.includes(String(number)),
    );
    if (handleRowSelectionData) {
      handleRowSelectionData(selectedData);
    }
  }, [rowSelection, table]);

  useEffect(() => {
    if (columnFilters && columnFilters.length > 0) {
      pageIndex = 0;
      table.setPageIndex(0);
    }
  }, [columnFilters]);

  useEffect(() => {
    if (isServerSideTable) {
      fetchData({
        table,
        pageIndex,
        pageSize,
        sorting,
        search: globalFilter,
        filters: columnFilters,
        toggleRefresh: toggleResetTable,
      });
    }
  }, [
    pageIndex,
    pageSize,
    sorting,
    toggleResetTable,
    columnFilters,
    globalFilter,
  ]);

  useEffect(() => {
    if (!paginate) {
      table.setPageSize(datatableData.length);
      table.setPageIndex(0);
    }
  }, [datatableData]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    table.setPageIndex(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    table.setPageSize(parseInt(event.target.value));
    table.setPageIndex(0);
  };

  return (
    <StyledGridForTable container>
      {showTopBar && (
        <Grid item xs={12}>
          <TopBar
            tableInstance={table}
            setGlobalFilter={setGlobalFilter}
            resetColumnFilters={resetColumnFilters}
            setColumnFilters={setColumnFilters}
            columnFilters={columnFilters}
            onRefreshCallback={onClickRefresh}
            topBarExtraElement={topBarExtraElement}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <DataTableContainer>
          <MuiTable>
            <TableHead>
              {table &&
                table.getHeaderGroups().map((headerGroup: any) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header: any) => {
                      return (
                        <TableCell
                          key={header.id}
                          sx={{
                            maxWidth: "300px",
                            p: isStylePrintable ? 0 : 2,
                            border: isStylePrintable
                              ? "1px solid #786464"
                              : null,
                            fontWeight: "bold",
                            textAlign: header?.column?.columnDef?.center
                              ? "center"
                              : "left",
                          }}
                        >
                          <div
                            style={{ cursor: "pointer" }}
                            {...{
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            {{
                              asc: (
                                <AiOutlineArrowUp />
                                /*<ArrowUpwardIcon
                                  sx={{ marginBottom: "-5px" }}
                                />*/
                              ),
                              desc: (
                                <AiOutlineArrowDown />
                                /*<ArrowDownwardIcon
                                  sx={{ marginBottom: "-5px" }}
                                />*/
                              ),
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableHead>
            {datatableData?.length > 0 ? (
              <TableBody>
                {table.getRowModel().rows.map((row: any) => {
                  return (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell: any) => {
                        return (
                          <TableCell
                            key={cell.id}
                            sx={{
                              p: isStylePrintable ? 0 : 2,
                              border: isStylePrintable
                                ? "1px solid #786464"
                                : null,
                              borderBottom: isStylePrintable
                                ? null
                                : "2px solid #f5f7f9 !important",
                              color: "#868787 !important",
                              textAlign: cell?.column?.columnDef?.center
                                ? "center"
                                : "left",
                            }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            ) : (
              <></>
            )}
          </MuiTable>
        </DataTableContainer>
        {datatableData?.length < 1 && !loading ? (
          <Body1>No data found</Body1>
        ) : null}
      </Grid>
      {paginate && datatableData?.length > 0 && (
        <Grid item xs={12}>
          <TablePagination
            component="div"
            className={classes.tablePagination}
            rowsPerPageOptions={pageSizes}
            count={totalCount}
            rowsPerPage={pageSize}
            page={pageIndex}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      )}
      {loading && (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        >
          <Body1>
            Loading <CircularProgress />
          </Body1>
        </Box>
      )}
    </StyledGridForTable>
  );
};

export default DataTable;
