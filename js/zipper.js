import { downloadZip } from "/js/modules/client-zip/index.js"

async function downloadPlugin (fileName, filesToZip) {
    const blob = await downloadZip(filesToZip).blob() 
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = fileName;
    link.click()
    link.remove()
}

export { downloadPlugin }
