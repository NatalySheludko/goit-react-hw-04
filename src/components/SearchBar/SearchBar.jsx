import { Field, Formik, Form } from "formik";
import css from "../SearchBar/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleInputClick = () => {
    setIsActive(true);
  };

  return (
    <div className={css.formWrap}>
      <header>
        <Formik
          initialValues={({ query: "" })}
          onSubmit={(values, actions) => {
            onSearch(values.query);
						actions.resetForm();
						setIsActive(false);
          }}
        >
          <Form>
            <div className={`${css.search} ${isActive ? css.active : ""}`}>
              <Field
                className={css.input}
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onClick={handleInputClick}
              />
              <button type="submit" className={css.reset} onClick={onClick}>     
                <div className={css.handle}></div>
              </button>
            </div>
          </Form>
        </Formik>
      </header>
    </div>
  );
}
