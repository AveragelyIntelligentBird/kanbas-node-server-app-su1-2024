import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    app.put("/api/courses/:id", async (req, res) => {
        const {id} = req.params;
        const status = await dao.updateCourse(id, req.body);
        res.json(status);
    });

    app.delete("/api/courses/:id", async (req, res) => {
        const status = await dao.deleteCourse(req.params.id);
        res.json(status);
    });

    app.post("/api/courses", async (req, res) => {
        const courseCheck = await dao.findCourseByName(req.body.name);
        if (courseCheck) {
            res.status(400).json({message: "Course with this name already exists"});
            return;
        }

        const course = await dao.createCourse(req.body);
        res.json(course);
    });

    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    });
};
