class Utils{
    forcedClassNameToArray=(className=[])=>{
        if((typeof className === "string") && className !=""){
            className = className.split(",");
        }else if((typeof className === "string") && className ==""){
            className = [""];
        }
        return className
    }
}

export default new Utils();