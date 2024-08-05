"use client"

import { useState, useEffect } from 'react';
import { ApiCallProps } from '@/types/ApiCallProps';
import CallAPI from '../../api/CallApi';

interface FetchDataResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

const useFetchData = <T,>(query: string, apiName: string): FetchDataResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CallAPI({ method: 'get', query, apiName, body: null });
                setData(response);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
                setLoading(false);
            }
        };

        fetchData();
    }, [query, apiName]);

    return { data, loading, error };
};

export default useFetchData;
