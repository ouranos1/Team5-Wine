//App 의 page.tsx 에서

import React from 'react';
import Dropdown from '../../components/dropdown/DropDown';

const DropDownPage = () => {
    const items = [
        { name: "마이페이지", path: "/myprofile" },
        { name: "로그아웃", path: "/" },
        // { name: "안뇽하삽니까", path: "" },
        // { name: "똑똑히 봤슈", path: "" }
    ];

    return (
        <div>
            <Dropdown items={items} />
        </div>
    );
};

export default DropDownPage;
