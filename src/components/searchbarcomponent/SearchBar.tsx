'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import './SearchBar.scss';
import searchIcon from '@/assets/icon/search.svg';
import Image from 'next/image';

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

  const executeSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set('query', keyword);
    } else {
      params.delete('query');
    }

    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };

  useEffect(() => {
    const currentKeyword = (searchParams.get('query') as string) || '';
    setKeyword(currentKeyword);
  }, [searchParams]);

  return (
    <>
      <div className="search-bar-container">
        <button className="search-bar-icon" onClick={executeSearch}>
          <Image src={searchIcon} alt="검색아이콘" width={24} height={24}></Image>
        </button>
        <input className="input-search" type="text" placeholder={placeholder} value={keyword} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      </div>
    </>
  );
}
