import { useState } from 'react';

type TypeCategory = { iconUrl: string; name: string };

export function CategoryFilter() {
  const [categories, setCategories] = useState<TypeCategory[]>([
    {
      iconUrl:
        'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      name: 'Tropical',
    },
    {
      iconUrl:
        'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      name: 'Bed  & breakfast',
    },
    {
      iconUrl:
        'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      name: 'Tiny homes',
    },
    {
      iconUrl:
        'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      name: 'Farms',
    },
  ]);

  return (
    <div className="flex items-center w-full">
      <div className="flex items-center justify-center border-[.5px] border-gray-400 rounded-full w-7 h-7 cursor-pointer">
        <svg
          className="w-7 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Arrow / Chevron_Left_MD">
              <path
                id="Vector"
                d="M14 16L10 12L14 8"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <ul className="flex items-center w-full px-5 pt-2">
        {categories.map((category: TypeCategory) => (
          <li
            className="flex flex-col items-center mr-8 last-of-type:mr-0 text-gray-700 font-medium text-[13px] cursor-pointer text-center opacity-60 hover:opacity-100"
            key={category.name}
          >
            <img className="w-6 h-6 mb-1" src={category.iconUrl} alt="" />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center border-[.5px] border-gray-400 rounded-full w-7 h-7  cursor-pointer">
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Arrow / Chevron_Right_MD">
              <path
                id="Vector"
                d="M10 8L14 12L10 16"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
