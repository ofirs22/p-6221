import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 
        className="text-3xl font-bold mb-6 text-[#05172C]"
        style={{ fontFamily: 'Ploni ML v2 AAA' }}
      >
        אודות
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4 text-[#264653]">
          ברוכים הבאים ל-SmartBasket, המקום שבו קניות חכמות פוגשות נוחות מקסימלית.
        </p>
        <p className="text-lg mb-4 text-[#264653]">
          אנחנו מאמינים שקניות מצרכים צריכות להיות פשוטות, נוחות וחסכוניות.
          המשימה שלנו היא להביא לכם את המוצרים הטריים והאיכותיים ביותר במחירים
          הטובים ביותר, ישירות עד לדלת שלכם.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 
              className="text-xl font-semibold mb-4 text-[#05172C]"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
            >
              החזון שלנו
            </h2>
            <p className="text-[#264653]">
              להפוך את חוויית הקניות למהנה, יעילה וחסכונית עבור כל לקוח ולקוח.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 
              className="text-xl font-semibold mb-4 text-[#05172C]"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
            >
              הערכים שלנו
            </h2>
            <ul className="list-disc list-inside text-[#264653]">
              <li>איכות ללא פשרות</li>
              <li>שירות לקוחות מצוין</li>
              <li>מחירים הוגנים</li>
              <li>נוחות מקסימלית</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;