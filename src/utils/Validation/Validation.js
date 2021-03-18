import React, { useEffect } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = React.useState(true);
  const [minLengthError, setMinLengthError] = React.useState(false);
  const [maxLengthError, setMaxLengthError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [inputValid, setInputValid] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');

  // useEffect(() => {
  //   for (const validation in validations) {
  //     switch (validation) {
  //       case 'minLengthError':
  //         value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
  //         setMessageError(`Минимальное количество символов - ${validations[validation]}`);
  //         break;
  //       case 'maxLengthError':
  //         value.length >= validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
  //         setMessageError(`Максимальное количество символов - ${validations[validation]}`);
  //         break;
  //       case 'isEmpty':
  //         value ? setEmpty(false) : setEmpty(true);
  //         // setMessageError('Обязательное поле');
  //         break;
  //       case 'emailError':
  //         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //         re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
  //         setMessageError('Неккоректный email');
  //         break;
  //       // no default
  //     };
  //   }
  // }, [value])

  useEffect(() => {
    if (validations.emailError !== undefined) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
      setMessageError('Неккоректный email');
    }
    if (value.length === 0) {
      setEmpty(true);
      setMessageError('Обязательное поле');
    } else {
      setEmpty(false);
    };
    if (value.length !== 0 && value.length < validations.minLengthError) {
      setMinLengthError(true);
      setMessageError(`Минимальное количество символов - ${validations.minLengthError}`);
    } else {
      setMinLengthError(false);
    };
    if (value.length >= validations.maxLengthError) {
      setMaxLengthError(true);
      setMessageError(`Максимальное количество символов - ${validations.maxLengthError}`);
    } else {
      setMaxLengthError(false);
    };
  }, [value])

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError])

  return { messageError, isEmpty, minLengthError, maxLengthError, emailError, inputValid };
};

export const useInput = (initialValue, validations) => {
  const [value, setValues] = React.useState(initialValue);
  const valid = useValidation(value, validations);
  const [isDirty, setIsDirty] = React.useState(false);
  useEffect(() => { setValues(initialValue)}, [initialValue] )
  const onChange = (e) => {
    setValues(e.target.value);
  }

  const onFocus = () => {
    setIsDirty(true);
  }

  return { value, isDirty, onChange, onFocus, ...valid };
};
