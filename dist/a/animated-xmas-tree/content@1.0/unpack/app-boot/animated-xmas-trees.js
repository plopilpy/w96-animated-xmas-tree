const { register } = w96.app;
const { Theme } = w96.ui;


var icon16 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEUAAAAAAAD/96/Pry//9y//////5y//7y/v1z/v11//74//5z/fvy/v1x/v1y/v3y/v50/fxx/Pvy/fvx/fzw/Ptx/v3w8AXy9fn08vhz8/jz9/t28ffz8vfz+CPxppAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQflDA4BOxn2aZdsAAAAdklEQVQY01WO7RKCMAwEu1I/QbAKHsHy/q9pUbElkz93szuJc58Btxl2VdkA3pMh9oejP50vdW6aK7RNIdHVt00O7T08+myEwFDRFw08B8pXEMvmPMom0ysrKSnGP5KA2UyTrQjY4sh+CKNFKUlaEVLWrPi98wYtugazlA/5/gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMi0xNFQwMTo1OToyNCswMDowML9OxSIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTItMTRUMDE6NTk6MjQrMDA6MDDOE32eAAAAAElFTkSuQmCC"
var icon32 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABVlBMVEUAAAAAAAD46ED////w4FjYwDj/+LDw4GjIsDD/+Mj/+Kjo2FjIsDi4mDD//6jw4EjAoDj/+GD/+Ejw4CDYwCjIqDj46BDw4Bj44Cj46DD/+Dj/8DD/+Cj48Djo2Djg0ED48ID48Ijw2CDg0Bjo2BjgyCjYyCjo2DD46CD48CD/+Gj/8HDw6Ejw6Dj46FDQuCDYwDDo0Cj48DD/+JD48GDQuDDgyDDo2Cjw6DD/+Fjw4FDgyDjIsCjAqDDw4DD46Djw4Dj48Ejo0CDw2CjgyCDQwCjYwCDYwBjw4CjIuCjIqCjYuCDQwBjgyBjYyCDAoDDg0BDgyBDQsCiwkCjw4BBIoEBAmDhgqFB4uGgAXDBAmEA4kDhAkDg4iDgAVCh4sGh4uHBYoFA4kEAwkDgwiDgoiDhYoEggfDgAXChImDhwsGgofDiY2IhImEAgfDAwiEBAkECY0IhWWlWeAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQflDA4BOxiBbqf6AAABmUlEQVQ4y32S61MTMRTFexpfiAiWQkUelmJbhEqtvKEKQouAQgWEcFmN3Zp0F5YW/f+/mA4MM7vN7p3J5M7cc5PfuUks5gvEogPxaAXYg4eRCjx6/CRKgJ6nvc/6IhR4jn4MGAW4jReJweTQXe7TYTjFXo68Gh0bG5943ZueZPHM1Bu/AtlcfnD6bWJmtvCuMDeRLQJdl7wvZT7MsPmFfCm5CBMIlpZXVtNsbb38McQIPo1szBU2k+Ww+uf48lZpe6pSDFGA5XNVVsnusC/mUezm9vbxtYr9b+zAyHhYBoqsXAO+pwwCHGlrqLDjE71h2KTorB+pYg2x8H/T/QiB+ukZP6dzhHZfWD9/ccF/G09B3W7QH0kWKU7cdApIKGUJS1HTEcY5WFIR1V3lkKNgILjUvVfc5oI8pWSQAtd2y1UeKamU2+hwBCk0gWw7DjVJWE0uqZsCDcVtzSB1v3sThNDG/yolvDbZlpB2XfvxzQL/7JbU7CTdhpQukefeSB8FIMjxRN3WTj1+1ckp4AOOR44rSTsh6uT35f8bklsiBrGt0wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMi0xNFQwMTo1OToyMyswMDowMHrp+6wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTItMTRUMDE6NTk6MjMrMDA6MDALtEMQAAAAAElFTkSuQmCC"


class XmasTrees extends WApplication {
    constructor() {
        super();
    }
    
    async main(argv) {
        super.main(argv);
        
        const mainwnd = this.createWindow({
            title: "Animated Christmas Trees",
            icon: icon16,
            initialHeight: 150,
            initialWidth: 300,
            resizable: false,
            
            body: "<center><h1>Press Ctrl+Click to make trees!</h1><p>Note: This program keeps running even after this dialog is closed. Restart Windows 96 to end the program.</p>",
            bodyClass: "anim-xmas-trees",
            center: true,
            taskbar: true
        },
        w96.WRT.runFile('C:/local/animated-xmas-trees/animtreelauncher.js'),
         true); // true specifies that this is an app window (main window)
        
        mainwnd.show();
    }
}

register({
    command: "xmastree",
    type: "gui",
    cls: XmasTrees,
    meta: {
        icon: icon32,
        friendlyName: "Animated Desktop Christmas Trees"
    }
});

