import { useState, useEffect } from 'react';
import type { Resource } from '../types/resource';
import { getResources } from '../services/api';

export function useResources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchResources() {
      try {
        const data = await getResources();
        setResources(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch resources'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchResources();
  }, []);

  return { resources, isLoading, error };
}