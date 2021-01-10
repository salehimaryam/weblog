exports.getDashboard = async (req,res) => {
   res.render("private/blogs",{
       pageTitle :" بخش مدیریت | داشبورد",
       path:"/dashboard",
       layout: "./layouts/dashlayout",
       fullname: req.user.fullname,
   });
};

exports.getAddPost = (req, res) => {
    res.render("private/addPost", {
        pageTitle: "بخش مدیریت | ساخت پست جدید",
        path: "/dashboard/add-post",
        layout: "./layouts/dashlayout",
        fullname: req.user.fullname,
    });
};