class Loginpage{
    constructor(page){
        this.page=page;
        this.usernameinput=page.locator('#user');
        this.passwordinput=page.locator('#pass');
        this.loginbutton=page.locator('.btn_log');
    }

    async goto(){
        await this.page.goto('https://www.mycontactform.com/');
    }

    async login(username,password){
        await this.usernameinput.fill(username);
        await this.passwordinput.fill(password);
        await this.loginbutton.click();
    }
}

module.exports={Loginpage};