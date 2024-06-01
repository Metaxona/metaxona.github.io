---
{
    "title": "Install Android Sdk CLI Tools On Ubuntu Server",
    "slug": "install-android-sdk-cli-tools-on-ubuntu-server",
    "description": "how to install android sdk on ubuntu server using android sdk's commandline tools",
    "datePublished": "06-1-2024",
    "lastUpdated": "",
    "keywords": ["Ubuntu Server", "Android", "Android SDK", "Installation", "How To"],
    "tags": ["How To", "Ubuntu Server", "Android SDK", "Android"],
    "categories": ["General"]
}
---

## Install Java Development kit (JDK)

To install a JDK compatible with ubuntu server, use the command below

```bash
sudo apt install default-jdk
```

### Download Android Studio Command Line Tools

Now, the next step is to download the command line tool zip

> Note: MUST be the Command line tools only Version

To get the latest command line tool go to the link below

[Android Command Line Tools](https://developer.android.com/studio#command-line-tools-only)

then choose the one for linux

[commandlinetools-linux-11076708_latest.zip](https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip)

you can either click the package and copy the link on the `[Download Android Command Line Tools for Linux]` and `right click` then `copy link address` or

`https://dl.google.com/android/repository/` append the package name to this url

now that you have the link for the command line tool, it's time to download it.

First, go to the root of your server by `cd ~`

Second, use `wget <command line tool package url here>` like the command below

```bash
wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
```

> Note: make sure you have `wget` installed for this one, if not, use `sudo apt install wget`

### Extract the Package and Set Environments

now, create a dir where you want to place the sdk tool, for example:

```bash
# ANDROID_SDK_ROOT will set a reusable variable you can use in the later commands
ANDROID_SDK_ROOT=/opt/androidSdk sudo mkdir -p $ANDROID_SDK_ROOT/cmdline-tools 
```

now you need to unzip the tool and set the `-d` directory you want the extracted files to go, in my case I placed it in the directory I created inside `/opt` dir

> Note: make sure you have `unzip` installed, if not, use `sudo apt-get install unzip`

```bash
sudo unzip commandlinetools-linux-11076708_latest.zip -d $ANDROID_SDK_ROOT/cmdline-tools 
```

now move it to another folder called latest if you want, since in the future you might need to install multiple versions of the command line tool and might want to switch version

```bash
sudo mv $ANDROID_SDK_ROOT/cmdline-tools/cmdline-tools $ANDROID_SDK_ROOT/cmdline-tools/latest
```

after the extraction, it's time to set the environment variables

using `zsh`, just add something like this to your `.zshrc` make sure to change the path to the one you set on your server

```bash
export ANDROID_SDK_ROOT="/opt/androidSdk"

export PATH="$ANDROID_SDK_ROOT/emulator:$ANDROID_SDK_ROOT/tools:$ANDROID_SDK_ROOT/tools/bin:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/cmdline-tools/latest:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$PATH"
```

now you can restart your shell or just do `source .zshrc`

then check if the tools are installed properly by running `sdkmanager --version`

if you encounter an error like this;

```bash
Error: LinkageError occurred while loading main class com.android.sdklib.tool.sdkmanager.SdkManagerCli
        java.lang.UnsupportedClassVersionError: com/android/sdklib/tool/sdkmanager/SdkManagerCli has been compiled by a more recent version of the Java Runtime (class file version 61.0), this version of the Java Runtime only recognizes class file versions up to 55.0
```

just upgrade your `JDK` version to the compatible version ex. `sudo apt install openjdk-17-jdk-headless`

and if you try to run the `sdkmanager --version` command again, you should get a result like `12.0`

### Accepting Licenses

To use the command line tools, specially the SDK, you need to accept the licenses first, to do that just run the command below

```bash
yes | sdkmanager --licenses
```

### Installing Packages You Need

Below is the command I used to install platform tools like adb and sdk platforms like android versions 11 to 14

```bash
yes | sdkmanager "platform-tools" "platforms;android-30" "platforms;android-31" "platforms;android-32" "platforms;android-33"
```

For More Info on SDK Manager Commands Go Here: [sdkmanager](https://developer.android.com/tools/sdkmanager)

if you encounter an error like the one shown below when installing ackages

```bash
Warning: Failed to read or create install properties file.
```

you need to update the permission of your sdk root, to do that you can execute the command below

```bash
sudo chown -R $USER:$USER /opt/androidSdk
```

remember that the path you are changing the permission is the ROOT of your SDK

and just to fix other potential issues that might come from lacking some libraries, you might want to install `libgl1-mesa-dev` using the command below

```bash
sudo apt install libgl1-mesa-dev -y
```

after the installation, you can check if all packages are installed by using the command below

```bash
sdkmanager --list_installed
```

and now you are all set up and ready to start or continue your project that needs Android SDK on a headless ubuntu server.
