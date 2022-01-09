import React from "react";
import s from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={s.wrap}>
      <div className={s.contact}>Контакты для покупателей</div>
      <div className={s.item}>+375 (17) 359 59 59</div>
      <div className={s.item}>+375 (29) 5-700-700 МТС</div>
      <div className={s.item}>+375 (44) 5-700-700 A1</div>
      <div className={s.item}>+375 (25) +375 25 502 10 21:)</div>
      <div className={s.item}>275 (единый справочный центр)</div>
      <div className={s.item}>275@5element.by</div>
      <div className={s.item}>
        20036, г. Минск, пр-т Дзержинского 8, 13 этаж, к.2
      </div>
    </div>
  );
};

export default Contact;
