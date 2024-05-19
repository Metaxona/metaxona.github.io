---
{
    "title": "Install Turso CLI on Ubuntu Server",
    "slug": "install-turso-cli-on-ubuntu-server",
    "description": "Installing Turso CLI on a headless ubuntu server via SSH connection",
    "datePublished": "05-9-2024",
    "lastUpdated": "",
    "keywords": ["setup", "installation", "howTo"],
    "tags": ["How To", "Ubuntu Server"],
    "categories": ["General"]
}
---

## Install Using Curl

`curl -sSfL https://get.tur.so/install.sh | bash`

## Verification

If you are using ubuntu server and installing using you might get stuck ath the scarf page like me, press `q` to quit that page and then copy the link that would be shown after on the terminal that looks something like:

```text
https://api.turso.tech/signup?port=35975&redirect=true&state=AbCdEfGhIjKlMnOpQrStUvWxYz123456&type=cli
```

then open that on any browser you prefer, it would then redirect you to a new link that looks something like:

```text
http://localhost:35975/?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c&username=metaxona
```

now you will encounter an error here stating that the `Site Can't Be Reached`, now change the `localhost` to the ip of your ubuntu server ex. `192.168.1.10` which would allow you to remotely verify your installation

## Conclusion

To conclude the installation, restart your terminal and type `turso` to check if you successfully installed turso cli
