import React from 'react'
import { UserHeader } from '../../components/front/userArea/UserHeader';
import {AddressComponent } from '../../components/front/userArea/AddressComponent'
import { TrackingCard } from '../../components/front/tracking/TrackingCard';
import { SavingsDisplay } from '../../components/front/userArea/SavingDisplay'
import { FavoriteProducts } from '../../components/front/userArea/FavoriteProducts';
import { UserLists } from '../../components/front/userArea/UserLists';
/*entities needed
    1. user
    2. orders
    3. payments
    4. courier
    5. favorites
    6. package
*/


export const UserArea = () => {
    return (
      <>
      <link
        href="https://fonts.googleapis.com/css2?family=Ploni+DL+1.1+AAA:wght@400;600&family=Ploni+ML+v2+AAA:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col justify-center p-10 mx-auto w-full rounded-2xl max-w-[1104px] min-w-[240px] max-md:p-8 max-md:mx-5 max-sm:p-5 max-sm:mx-2.5 max-sm:rounded-xl">
        
        {/* Wrapper with gap-2 to ensure 8px spacing between cards */}
        <div className="flex flex-col gap-2">

          {/* User Header Card */}
          <div className="flex flex-col justify-center p-10 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px]">
            <UserHeader />
          </div>

          {/* Savings Display Card */}
          <div className="flex flex-col justify-center p-10 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px]">
            <SavingsDisplay />
          </div>

          {/* Address Component Card */}
          <div className="flex flex-col justify-center p-10 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px] text-right">
            <TrackingCard title="הכתובת שלי" titleWidth={180}>
              <div className="pt-4">
                <AddressComponent />
              </div>
            </TrackingCard>
          </div>

          {/* Favorite Products Card */}
          <div className="flex flex-col justify-center p-10 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px]">
            <FavoriteProducts />
          </div>
          {/* My lists Card */}
          <div className="flex flex-col justify-center p-10 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px]">
            <UserLists />
          </div>

        </div>
      </div>
    </>
      );
}


