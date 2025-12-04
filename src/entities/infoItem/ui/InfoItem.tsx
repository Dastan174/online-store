import React from 'react';
import scss from "./infoItem.module.scss"
import { IoIosLock } from 'react-icons/io';

export const InfoItem = () => {
    return (
            <div className={scss.card}>
                    <div className={scss.block}>
                        <div className={scss.Right}>
                            <h3><IoIosLock /></h3>
                        </div>
                        <div className={scss.Left}>
                          <h5>Бесплатный расчет стоимости <br />
                          под ваш объект в 3-х вариантах</h5>
                        </div>
                    </div>
                      <div className={scss.block}>
                        <div className={scss.Right}>
                            <h3><IoIosLock /></h3>
                        </div>
                        <div className={scss.Left}>
                          <h5>Бесплатный расчет стоимости <br />
                          под ваш объект в 3-х вариантах</h5>
                        </div>
                    </div>
                      <div className={scss.block}>
                        <div className={scss.Right}>
                            <h3><IoIosLock /></h3>
                        </div>
                        <div className={scss.Left}>
                          <h5>Бесплатный расчет стоимости <br />
                          под ваш объект в 3-х вариантах</h5>
                        </div>
                    </div>
                </div>
    );
};

export default InfoItem;