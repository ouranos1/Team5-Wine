import React from 'react';
import Dropdown from '../../components/dropdown/DropDown'; // 올바른 경로로 import

const DropDownPage = () => {
    const items = [
        { name: "마이페이지", path: "/myprofile" },
        { name: "로그아웃", path: "" }
    ];

    return (
        <div>
            <Dropdown items={items} />
        </div>
    );
};

export default DropDownPage;
