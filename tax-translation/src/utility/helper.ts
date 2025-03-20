
export const notSupportedFiles = (selectedFiles: Array<File & { error?: string }>) => {
    let unSupportedFiles: typeof selectedFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
        let unSupportedFile: (typeof selectedFiles)[0];
        if (
            !(selectedFiles[i].type === "application/pdf")
        ) {
            unSupportedFile = selectedFiles[i];
            unSupportedFile.error = "Unsupported File Type";
            unSupportedFiles.push(unSupportedFile);
        } else if (selectedFiles[i].size === 0) {
            unSupportedFile = selectedFiles[i];
            unSupportedFile.error = "File Size Cannot Be Zero"
            unSupportedFiles.push(unSupportedFile);
        } else if (selectedFiles[i].size > (50 * 1024 * 1024)) {
            unSupportedFile = selectedFiles[i];
            unSupportedFile.error = "File Size Too Large"
            unSupportedFiles.push(unSupportedFile);
        } else if (checkFileNameCharLimit(selectedFiles[i].name)) {
            unSupportedFile = selectedFiles[i];
            unSupportedFile.error = "File Name Too Large"
            unSupportedFiles.push(unSupportedFile);
        }
    }
    return unSupportedFiles;
};

function checkFileNameCharLimit(filename: string) {
    const name = filename.split(`.${filename.split(".").pop()}`)[0];
    const regexp = /(\.\(\d+\))+/;
    const match = regexp.exec(name);
    return name.slice(0, match?.index).length > 80;
}

export const resetFileExplorer = (refValue: HTMLInputElement) => {
    const refObject = refValue
    if (refObject && Array.isArray(refObject)) {
        ; (refObject[0] as HTMLInputElement).value = ""
    } else if (refObject) {
        ; (refObject as unknown as HTMLInputElement).value = ""
    }
}