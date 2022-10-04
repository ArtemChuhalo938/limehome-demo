import { useState } from 'react';
import { getProperties, getPropertyById } from '../../services/api';

interface Map {
  fetchProperties: () => Promise<any>;
  fetchPropertyById: (id: string) => Promise<any>;
  loading: boolean;
}

export const useMap = (): Map => {
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const res = await getProperties();
      setLoading(false);
      return res;
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  const fetchPropertyById = async (id: string) => {
    try {
      setLoading(true);
      const res = await getPropertyById(id);
      setLoading(false);
      return res;
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  return {
    fetchProperties,
    fetchPropertyById,
    loading,
  };
};
