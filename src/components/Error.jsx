import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Error = () => {

    const location = useLocation();

    const {t} = useTranslation()

    return (
        <div className="mt-[350px] mb-32">
            <div className="container flex-col flex relative items-center">
                <div className="flex items-center inter-regular absolute gap-2 -top-32 left-3 justify-center">
                    <p className="opacity-[0.5] text-black">{t("bottomNav.home")}</p>
                    <p className="opacity-[0.5] text-black">/</p>
                    <p>404 {t("error.error")} <span className="text-red-500">( {t("error.route")} {location.pathname} )</span></p>
                </div>
                <div>
                    <h2 className="text-[80px] inter-regular font-bold ">{t("error.404")}</h2>
                    <p className="text-[16px] text-center inter-regular font-normal mt-[40px] mb-[80px]">{t("error.visited")}</p>
                    <Link to="/" className="bg-[#DB4444] text-white py-[16px] text-center block mx-auto rounded-[4px] w-[274px]">{t("error.back")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;