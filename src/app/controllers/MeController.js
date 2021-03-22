const Course = require('../models/Course');

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        // Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
        //     .then(([courses, deletedCount]) =>     // [courses, deletedCount] -> destructuring trong ES6
        //         res.render('me/stored-Courses', {
        //             deletedCount,
        //             courses: mutipleMongooseToObject(courses)
        //         })
        //     )
        //     .catch(next);
        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch((error) => {

        //     })

        try {
            const deletedCount = await Course.countDocumentsDeleted();
            const courses = await Course.find().lean();
            res.render('me/stored-courses', { courses, deletedCount });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /me/trash/courses
    async trashCourses(req, res, next) {
        try {
            const courses = await Course.findDeleted({}).lean();
            res.render('me/trash-courses', { courses });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MeController();
