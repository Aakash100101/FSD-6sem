import os from 'os';

const CPUSpecification = () => {
    try {
        const architecture = os.arch();
        console.log(architecture);

        console.log(os.platform());  //os platform

        const freeMemory = os.freemem();
        console.log(freeMemory);

        const usedMemory = (os.totalmem() - os.freemem())/1024*1024;
        console.log(usedMemory);
        
    } catch (error) {
        console.log("unable");
    }
}
CPUSpecification();