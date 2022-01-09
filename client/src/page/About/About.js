import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <div>
      <div className={s.values}>
        <div className={s.title}>Наши ценности</div>
        <div className={s.subtitle}>Клиентоориентированность</div>
        <div className={s.item}>
          Мы знаем и ценим наших клиентов и стремимся обслуживать их наилучшим
          образом.
        </div>
        <div className={s.subtitle}>Качество</div>
        <div className={s.item}>
          Мы предлагаем качественные товары и услуги.
        </div>
        <div className={s.subtitle}>Эффективность</div>
        <div className={s.item}>Мы делаем всё так как надо!</div>
        <div className={s.subtitle}>Профессионализм</div>
        <div className={s.item}>
          Мы стремимся к созданию команды профессионалов.
        </div>
        <div className={s.subtitle}>Ответственность</div>
        <div className={s.item}>
          Мы несём ответственность за взятые обязательства и результат.
        </div>
      </div>
    </div>
  );
};

export default About;
