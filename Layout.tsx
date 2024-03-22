import { StyleSheet } from "react-native";

/**
 * @param classValue className input values
 * @return StyleSheet file
 */
export function getClasses(classValue?: string) {
    if (classValue === undefined) {
        return undefined;
    }

    const parts: string[] = classValue.split(/\s+/); //check if multiple spaces -- and reduce them to max one between words
    const modifiedString: string = parts.join(' ');

    const inputValuesArray = modifiedString.split(" "); //get the words between the spaces
    const outputValuesArray = [];

    //global sizes for gaps, margins etc. -- can be changed
    const sizeS = 5;
    const sizeM = 15;
    const sizeL = 30;
    const sizeXL = 50;
    const sizeXXL = 100;

    for (let i = 0; i < inputValuesArray.length; i++) {
        switch(inputValuesArray[i]) {
            //values can be added here (format: case "":           outputValuesArray.push({}); break;)

            case "w-100":           outputValuesArray.push({width: "100%"}); break;
            case "w-50":            outputValuesArray.push({width: "50%"}); break;
            case "w-25":            outputValuesArray.push({width: "25%"}); break;
            
            case "h-100":           outputValuesArray.push({height: "100%"}); break;
            case "h-50":            outputValuesArray.push({height: "50%"}); break;
            case "h-25":            outputValuesArray.push({height: "25%"}); break;

            case "flex":            outputValuesArray.push({display: "flex"}); break;
            case "center":          outputValuesArray.push({display: "flex", justifyContent: "center"}); break;
            case "start":           outputValuesArray.push({display: "flex", justifyContent: "flex-start"}); break;
            case "end":             outputValuesArray.push({display: "flex", justifyContent: "flex-end"}); break;
            case "items-center":    outputValuesArray.push({display: "flex", alignItems: "center"}); break;
            case "items-start":     outputValuesArray.push({display: "flex", alignItems: "flex-start"}); break;
            case "items-end":       outputValuesArray.push({display: "flex", alignItems: "flex-end"}); break;

            case "between":         outputValuesArray.push({display: "flex", justifyContent: "space-between"}); break;
            case "evenly":          outputValuesArray.push({display: "flex", justifyContent: "space-evenly"}); break;
            case "around":          outputValuesArray.push({display: "flex", justifyContent: "space-around"}); break;

            case "column":          outputValuesArray.push({display: "flex", flexDirection: "column"}); break;
            case "row":             outputValuesArray.push({display: "flex", flexDirection: "row"}); break;
            case "wrap":            outputValuesArray.push({display: "flex", flexWrap: "wrap"}); break;

            case "flex-1":          outputValuesArray.push({display: "flex", flex: "1"}); break;
            case "flex-2":          outputValuesArray.push({display: "flex", flex: "2"}); break;
            case "flex-3":          outputValuesArray.push({display: "flex", flex: "3"}); break;
            case "flex-4":          outputValuesArray.push({display: "flex", flex: "4"}); break;

            case "gap-1":           outputValuesArray.push({gap: sizeS}); break;
            case "gap":             outputValuesArray.push({gap: sizeM}); break;
            case "gap-2":           outputValuesArray.push({gap: sizeM}); break;
            case "gap-3":           outputValuesArray.push({gap: sizeL}); break;
            case "gap-4":           outputValuesArray.push({gap: sizeXL}); break;
            case "gap-5":           outputValuesArray.push({gap: sizeXXL}); break;

            case "p-1":             outputValuesArray.push({padding: sizeS}); break;
            case "p":               outputValuesArray.push({padding: sizeM}); break;
            case "p-2":             outputValuesArray.push({padding: sizeM}); break;
            case "p-3":             outputValuesArray.push({padding: sizeL}); break;
            case "p-4":             outputValuesArray.push({padding: sizeXL}); break;
            case "p-5":             outputValuesArray.push({padding: sizeXXL}); break;

            case "pl-1":            outputValuesArray.push({paddingLeft: sizeS}); break;
            case "pl":              outputValuesArray.push({paddingLeft: sizeM}); break;
            case "pl-2":            outputValuesArray.push({paddingLeft: sizeM}); break;
            case "pl-3":            outputValuesArray.push({paddingLeft: sizeL}); break;
            case "pl-4":            outputValuesArray.push({paddingLeft: sizeXL}); break;
            case "pl-5":            outputValuesArray.push({paddingLeft: sizeXXL}); break;

            case "pr-1":            outputValuesArray.push({paddingRight: sizeS}); break;
            case "pr":              outputValuesArray.push({paddingRight: sizeM}); break;
            case "pr-2":            outputValuesArray.push({paddingRight: sizeM}); break;
            case "pr-3":            outputValuesArray.push({paddingRight: sizeL}); break;
            case "pr-4":            outputValuesArray.push({paddingRight: sizeXL}); break;
            case "pr-5":            outputValuesArray.push({paddingRight: sizeXXL}); break;
            
            case "pt-1":            outputValuesArray.push({paddingTop: sizeS}); break;
            case "pt":              outputValuesArray.push({paddingTop: sizeM}); break;
            case "pt-2":            outputValuesArray.push({paddingTop: sizeM}); break;
            case "pt-3":            outputValuesArray.push({paddingTop: sizeL}); break;
            case "pt-4":            outputValuesArray.push({paddingTop: sizeXL}); break;
            case "pt-5":            outputValuesArray.push({paddingTop: sizeXXL}); break;

            case "pb-1":            outputValuesArray.push({paddingBottom: sizeS});break;
            case "pb":              outputValuesArray.push({paddingBottom: sizeM});break;
            case "pb-2":            outputValuesArray.push({paddingBottom: sizeM});break;
            case "pb-3":            outputValuesArray.push({paddingBottom: sizeL});break;
            case "pb-4":            outputValuesArray.push({paddingBottom: sizeXL}); break;
            case "pb-5":            outputValuesArray.push({paddingBottom: sizeXXL});break;

            case "m-1":             outputValuesArray.push({margin: sizeS}); break;
            case "m":               outputValuesArray.push({margin: sizeM}); break;
            case "m-2":             outputValuesArray.push({margin: sizeM}); break;
            case "m-3":             outputValuesArray.push({margin: sizeL}); break;
            case "m-4":             outputValuesArray.push({margin: sizeXL}); break;
            case "m-5":             outputValuesArray.push({margin: sizeXXL}); break;

            case "ml-1":            outputValuesArray.push({marginLeft: sizeS}); break;
            case "ml":              outputValuesArray.push({marginLeft: sizeM}); break;
            case "ml-2":            outputValuesArray.push({marginLeft: sizeM}); break;
            case "ml-3":            outputValuesArray.push({marginLeft: sizeL}); break;
            case "ml-4":            outputValuesArray.push({marginLeft: sizeXL}); break;
            case "ml-5":            outputValuesArray.push({marginLeft: sizeXXL}); break;

            case "mr-1":            outputValuesArray.push({marginRight: sizeS}); break;
            case "mr":              outputValuesArray.push({marginRight: sizeM}); break;
            case "mr-2":            outputValuesArray.push({marginRight: sizeM}); break;
            case "mr-3":            outputValuesArray.push({marginRight: sizeL}); break;
            case "mr-4":            outputValuesArray.push({marginRight: sizeXL}); break;
            case "mr-5":            outputValuesArray.push({marginRight: sizeXXL}); break;

            case "mt-1":            outputValuesArray.push({marginTop: sizeS}); break;
            case "mt":              outputValuesArray.push({marginTop: sizeM}); break;
            case "mt-2":            outputValuesArray.push({marginTop: sizeM}); break;
            case "mt-3":            outputValuesArray.push({marginTop: sizeL}); break;
            case "mt-4":            outputValuesArray.push({marginTop: sizeXL}); break;
            case "mt-5":            outputValuesArray.push({marginTop: sizeXXL}); break;

            case "mb-1":            outputValuesArray.push({marginBottom: sizeS}); break;
            case "mb":              outputValuesArray.push({marginBottom: sizeM}); break;
            case "mb-2":            outputValuesArray.push({marginBottom: sizeM}); break;
            case "mb-3":            outputValuesArray.push({marginBottom: sizeL}); break;
            case "mb-4":            outputValuesArray.push({marginBottom: sizeXL}); break;
            case "mb-5":            outputValuesArray.push({marginBottom: sizeXXL}); break;

            case "text-center":     outputValuesArray.push({textAlign: "center"}); break;
            case "text-left":       outputValuesArray.push({textAlign: "left"}); break;
            case "text-right":      outputValuesArray.push({textAlign: "right"}); break;
            
            case "relative":        outputValuesArray.push({position: "relative"}); break;
            case "absolute":        outputValuesArray.push({position: "absolute"}); break;

            case "pointer":         outputValuesArray.push({cursor: "pointer"}); break;
            
            case "hidden":          outputValuesArray.push({overflow: "hidden"}); break;

            case "round":           outputValuesArray.push({borderRadius: "50%"}); break;

            case "test":            outputValuesArray.push({borderStyle: "dashed", borderWidth: 1, borderColor: "red"}); break;
            case "test-2":          outputValuesArray.push({borderStyle: "dashed", borderWidth: 1, borderColor: "blue"}); break;
            case "test-3":          outputValuesArray.push({borderStyle: "dashed", borderWidth: 1, borderColor: "purple"}); break;
            case "test-4":          outputValuesArray.push({borderStyle: "dashed", borderWidth: 1, borderColor: "green"}); break;
            case "test-5":          outputValuesArray.push({borderStyle: "dashed", borderWidth: 1, borderColor: "yellow"}); break;

            default: console.log(inputValuesArray[i], 'can not be used as a param, inside the "className" prop'); break;
        }
    }

    const styles = StyleSheet.create({
        component: {
            ...outputValuesArray.reduce((acc, val) => Object.assign(acc, val), {})
        }
    });

    return styles.component;
}
