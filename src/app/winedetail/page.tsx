"use client";

// import React from 'react';
// import Card from '../../components/cardSoohyun/Card';
// import useFetchData from '../../components/cardSoohyun/useFetchData';

// interface ApiResponse {
//     imageUrl: string;
//     avgRating: number;
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
//                     avgRating={data.rating}
//                     description={data.description}
//                 />
//             )}
//         </div>
//     );
// };

// export default App;


import React from 'react';
import Cardmonthly from '../../components/cardmonthly/Card';
import Cardmy from '../../components/cardmy/Card';

const App: React.FC = () => {
    return (
        <div>
            <Cardmonthly
                image="/wine.png"
                avgRating={1.8}
                name="Ciel du Cheval Vineyard Collaboration Series II 2012"
            />
            <br />
            <Cardmy
                avgRating={5.0}
                time="10시간 전"
                name="Sentinal Carbernet Sauvignon 2016"
                content="Deep maroon color, tasting notes of blackberry, dark chocolate, plum. Super jammy and bold with some smoky after notes. Big flavor. Amazing value (would pay three times the price for it), well balanced flavor. Could drink all day everyday with or without food. I need more immediately."
            />

        </div>
    );
};

export default App;

