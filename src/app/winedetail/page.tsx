"use client";

// import React from 'react';
// import Card from '../../components/cardSoohyun/Card';
// import useFetchData from '../../components/cardSoohyun/useFetchData';

// interface ApiResponse {
//     imageUrl: string;
//     rating: number;
//     description: string;
// }

// const App: React.FC = () => {
//     const { data, loading, error } = useFetchData<ApiResponse>('/v1/wine', '와인 데이터');

//     if (loading) return <div>로딩 중...</div>;
//     if (error) return <div>오류 발생: {error.message}</div>;

//     return (
//         <div>
//             {data && (
//                 <Card
//                     imageUrl={data.imageUrl}
//                     rating={data.rating}
//                     description={data.description}
//                 />
//             )}
//         </div>
//     );
// };

// export default App;


import React from 'react';
import Card from '../../components/cardSoohyun/Card';

const App: React.FC = () => {
    return (
        <div>
            <Card
                imageUrl="/wine.png"
                rating={3.2}
                description="Ciel du Cheval Vineyard Collaboration Series II 2012"
            />
        </div>
    );
};

export default App;

