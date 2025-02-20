import React from 'react';



export const HeroDescription: React.FC = () => {
    const description = '.המוצרים שלנו נבחר במיוחד עבורכם – לכל צורך, אירוע או קנייה בסיסית כל מארז כולל את המצרכים הכי רלוונטיים, במחיר חזול בשוק ועם חנויה מטורפת .שלא תמצאו בשום מקום אחר. במקום לבזבז זמן ולהרכיב את הסל בעצמכם.בחרו מארז בקליק אחד ושלחו אותו ישירות לעגלה'
  return (
    <div className="flex flex-col items-end self-stretch my-auto min-w-[240px] w-[755px] max-md:max-w-full">
      <div className="flex flex-col items-end max-w-full rotate-[3.141592653589793rad] w-[755px]">
        <div className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          <span className="text-4xl leading-[70px] text-slate-900">
            למה לשלם יותר
          </span>
          <br />
          <span className="text-7xl font-semibold leading-[70px] text-slate-900">
            כשאפשר לחסוך?
          </span>
        </div>
        <div className="mt-6 text-2xl max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
};