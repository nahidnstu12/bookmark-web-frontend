import React, {useCallback, useEffect, useState} from 'react';
import lodashDebounce from 'lodash/debounce';
import {apiGet} from '../common/api';
import useSWR from 'swr';

export const countPaginatePage = (totalData: number, limit: number): number => {
    return totalData < 1 ? 0 : Math.ceil(totalData / limit);
};

export interface onFetchDataParams {
    table: any;
    pageIndex: any;
    pageSize: any;
    search: any;
    sorting: any;
    filters: any;
    toggleRefresh: any;
}

interface TUseFetchData {
    urlPath: string;
    filters?: any;
    orders?: any;
    paramsValueModifier?: (params: any) => any;
}

interface TReturnUseFetchData {
    onFetchData: (params: onFetchDataParams) => Promise<void>;
    data: Array<any> | any;
    loading: boolean;
    pageCount: number;
    totalCount?: number;
    summary?: Array<any>;
    mutate: any;
}

const useDataTableFetchData = ({
    urlPath,
    filters: mappedFilters,
    orders: mappedOrders,
    paramsValueModifier,
}: TUseFetchData): TReturnUseFetchData => {
    const [pageCount, setPageCount] = React.useState(0);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [params, setParams] = useState<any>({});
    const [toggleRefresh, setToggleRefresh] = useState<boolean>(false);

    const {
        data: tableData,
        error,
        mutate,
    } = useSWR(
        params?.page && params?.limit ? [urlPath, params, toggleRefresh] : null,
        (urlPath: string, params: any) => {
            return apiGet(urlPath[0], {params: urlPath[1]});
        },
    );

    const onFetchData = useCallback(
        ({
             table,
             pageIndex,
             pageSize,
             sorting,
             search,
             filters,
             toggleRefresh,
         }: onFetchDataParams) => {
            const columDefs = table._getColumnDefs();
            let _params: any = {
                page: pageIndex + 1,
                limit: pageSize,
            };
            const orderArr: {column: any; direction: any}[] = [];
            (sorting || []).forEach((item: any) => {
                orderArr.push({
                    column: item.id,
                    direction: item.desc ? 'DESC' : 'ASC',
                });
            });
            const filterArr: {column: any; type: string; value: any}[] = [];
            (filters || []).forEach((item: any) => {
                let index = table
                    ._getColumnDefs()
                    .findIndex((col: any) => col.id == item.id);

                filterArr.push({
                    column: item.id,
                    type: index >= 0 ? columDefs[index].filterFn : 'contains',
                    value: item.value,
                });
            });
            if (mappedFilters) {
                filterArr.push(...mappedFilters);
            }
            if (mappedOrders) {
                orderArr.push(...mappedOrders);
            }

            if (filterArr.length) {
                _params.filters = JSON.stringify(filterArr);
            }
            if (orderArr.length) {
                _params.orders = JSON.stringify(orderArr);
            }

            if (typeof paramsValueModifier === 'function') {
                let callbackResponse = paramsValueModifier({..._params});
                if (callbackResponse) {
                    _params = callbackResponse;
                }
            }

            if (typeof search === 'string' && search.trim().length) {
                _params.search = search;
            }

            setParams(_params);
            setToggleRefresh(toggleRefresh);
        },
        [],
    );

    useEffect(() => {
        if (tableData) {
            setTotalCount(tableData?.data?.paginate?.total);
            setPageCount(
                countPaginatePage(tableData?.data?.paginate?.total, params?.limit),
            );
        }
    }, [tableData]);

    const dFetchData = lodashDebounce(onFetchData, 500) as any;

    return <TReturnUseFetchData>{
        onFetchData: dFetchData,
        data: tableData?.data?.data || [],
        summary: tableData?.data?.summary || [],
        loading: !tableData && !error,
        pageCount,
        totalCount,
        mutate,
    };
        };

        export default useDataTableFetchData;
