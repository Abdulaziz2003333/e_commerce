import React from 'react';
import {useTranslation} from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
const SideNav = () => {
    const {t} = useTranslation()
    return (
        <div className="w-[240px] border-r-[1px] border-[rgba(0, 0, 0, 0.3)] h-[385px]">
            <ul className="flex flex-col pt-[40px] gap-[16px] inter-regular font-bold">
                <div className="flex items-center justify-between pr-5">
                    <li className="nav-item"><a href="">{t("hero.Woman’s Fashion")}</a></li>
                    <IoIosArrowForward/>
                </div>
                <div className="flex items-center justify-between pr-5">
                    <li className="nav-item"><a href="">{t("hero.Man’s Fashion")}</a></li>
                    <IoIosArrowForward/>
                </div>
                <li><a className="nav-item" href="">{t("hero.Electronics")}</a></li>
                <li><a className="nav-item" href="">{t("hero.Home & lifestyle")}</a></li>
                <li><a className="nav-item" href="">{t("hero.Medicine")}</a></li>
                <li><a className="nav-item" href="">{t("hero.Sport & outdoors")}</a></li>
                <li><a className="nav-item" href="">{t("hero.Baby & toys")}</a></li>
                <li><a className="nav-item" href="">{t("hero.Groceries & pets")}</a></li>
                <li><a className="nav-item" href="">{t("hero.Health & beauty")}</a></li>
            </ul>
        </div>
    );
};

export default SideNav;