const isAuthenticated = async (
    resolve: any,
    parent: any,
    args: any,
    context: any,
    info: any
) => {
    if (!context.session.userId) {
    // user is not logged in
    throw new Error("not authenticated from graphql middleware");
    }

    return resolve(parent, args, context, info);
};
    
export const middleware = {
    Mutation: {
        createInstructor: isAuthenticated,
        createCourse: isAuthenticated,
        // createReview: isAuthenticated,
        // createBookmark: isAuthenticated,
        // createTransaction: isAuthenticated,
        // createDuration: isAuthenticated,
        deleteInstructor: isAuthenticated,
        deleteCourse: isAuthenticated,
        // deleteReview: isAuthenticated,
        // deleteBookmark: isAuthenticated,
        // deleteTransaction: isAuthenticated,
        // deleteDuration: isAuthenticated
    }
};