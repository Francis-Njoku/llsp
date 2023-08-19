export const getErrors:any = (message: string, path: string) => {
    return {
        errors: [
            { 
                message,
                path
            }
        ]
    };
};