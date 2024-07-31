'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import './SearchBar.scss';

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const params = new URLSearchParams(searchParams);
      if (keyword) {
        params.set('query', keyword);
      } else {
        params.delete('query');
      }

      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl);
    }
  };

  useEffect(() => {
    const currentKeyword = (searchParams.get('query') as string) || '';
    setKeyword(currentKeyword);
  }, [searchParams]);

  return (
    <>
      <input className="input-search" type="text" placeholder={placeholder} value={keyword} onChange={handleInputChange} onKeyDown={handleKeyDown} />
    </>
  );
}
