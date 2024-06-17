import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "c:\\Users\\tahas\\OneDrive\\Desktop\\Netflix clone\\backend"
const files = await fs.readdir(basepath)

for (const item of files) {
    let extn = item.split(".")[item.split(".").length - 1]
    if(extn == "vscode" || extn == "node_modules" || extn == "html" || extn == "json" || extn == "js")
        continue;
    else if(fsn.existsSync(path.join(basepath, extn)))
        fs.rename(path.join(basepath, item), path.join(basepath, extn, item))
    else
    {
        fs.mkdir(extn)
        fs.rename(path.join(basepath, item), path.join(basepath, extn, item))
    }
}