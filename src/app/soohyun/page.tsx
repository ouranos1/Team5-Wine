import React from 'react';
import DropDown from '../../components/dropdown/DropDown'; // 올바른 경로로 import

const DropDownPage = () => {
    const items = ["마이페이지", "로그아웃"];

    return (
        <div>
            <DropDown items={items} />
        </div>
    );
};

export default DropDownPage;
