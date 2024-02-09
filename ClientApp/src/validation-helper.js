export default function ValidationForm(clockValues) {
    const errors = {}
    const onlyLettersPattern =  /[^a-zA-Z\s]+/;
                                

    if(!clockValues.fontFamily) {
        errors.fontFamily = "Font Family is required";
    } else if(onlyLettersPattern.test(clockValues.fontFamily)){
        errors.fontFamily = "Only letters allowed for this field";
    }

    if(!clockValues.fontColor) {
        errors.fontColor = "Font Color is required";
    } else if(onlyLettersPattern.test(clockValues.fontColor)){
        errors.fontColor = "Only letters allowed for this field";
    }    

    if(!clockValues.textTitle) {
        errors.textTitle = "Text Title is required";
    } else if(onlyLettersPattern.test(clockValues.textTitle)) {
        errors.textTitle = "Only letters allowed for this field";
    }

    return errors;
}