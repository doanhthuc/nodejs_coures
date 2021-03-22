const Course = require('../models/Course');

class CourseController {
    // [GET] /search/:slug
    async show(req, res) {
        try {
            const course = await Course.findOne({
                slug: req.params.slug,
            }).lean();
            res.render('courses/show', { course });
        } catch (error) {
            next(error);
        }
    }

    create(req, res) {
        res.render('courses/create');
    }

    async store(req, res, next) {
        const formData = { ...req.body };
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        try {
            await course.save();
            res.redirect('/me/stored/courses');
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res) {
        try {
            const course = await Course.findById(req.params.id).lean();
            res.render('courses/edit', { course });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res) {
        try {
            await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res) {
        try {
            await Course.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }

    async forceDelete(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }

    async restore(req, res, next) {
        try {
            await Course.restore({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CourseController();
