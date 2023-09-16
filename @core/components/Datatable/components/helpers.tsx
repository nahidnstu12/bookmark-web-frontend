import {
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import React from "react";
import DatatableCheckbox from "./DatatableCheckbox";

export function getTableOptions({
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
}: any) {
  const serverSideOptions: any = {
    data: datatableData,
    columns: datatableColumns,
    filterFns: {},
    enableFilters: true,
    enableColumnFilters: true,
    state: {
      columnVisibility,
      columnFilters,
      globalFilter,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
    manualPagination: true,
    manualFiltering: true,
    manualSorting: true,
    pageCount: controlledPageCount,
  };

  const clientSideOptions: any = {
    data: datatableData,
    columns: datatableColumns,
    filterFns: {},
    enableFilters: true,
    enableColumnFilters: true,
    state: {
      columnVisibility,
      columnFilters,
      globalFilter,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  };

  return isServerSideTable ? serverSideOptions : clientSideOptions;
}

export function dataTableEnableSelectableRow({ row }: any) {
  return (
    <div className="px-1">
      <DatatableCheckbox
        {...{
          checked: row.getIsSelected(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    </div>
  );
}

export function dataTableEnableSelectableHeader({ table }: any) {
  return (
    <DatatableCheckbox
      {...{
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler(),
      }}
    />
  );
}
