# Day1ハンズオン

## 1.事前準備

Oracle Functionsを利用する上で、必要な事前準備を行います。

### 1-1.OICDの確認

OCIR(Oracle Functionsを管理するOracle提供のプライベートDockerレジストリ)にログインするための認証tokenを作成します。

作成の上で必要となる情報を取集します。

画面左上にあるハンバーガーメニューをクリックして、「アイデンティティとセキュリティ」-「コンパートメント」を選択します。

![OICDの確認 1](images/2-001.png)

`HandsOn` を選択します。

![OICDの確認 2](images/2-002.png)

「hands-on-<ご自身の苗字>」のコンパートメントを選択します。

![OICDの確認 3](images/2-003.png)

「コンパートメント情報」にある「OCID」の「コピー」テキストをクリックして、クリップボードにコピーします。

![OICDの確認 4](images/2-004.png)

コピーした内容は、テキストエディタなどにペーストしてください。

### 1-2.認証トークンの作成

画面右上の人型のマークが表示されている箇所をクリックします。さらに、展開されたメニューのユーザー名部分をクリックします。

![認証トークンの作成 1](images/2-005.png)

画面左下にある「認証トークン」をクリックします。

![認証トークンの作成 2](images/2-006.png)

「トークンの生成」ボタンをクリックします。

![認証トークンの作成 3](images/2-007.png)

「説明」に `This token is used for Oracle Functions Handson` と入力して、「トークンの生成」ボタンをクリックします。

![認証トークンの作成 4](images/2-008.png)

「コピー」テキストをクリックして、クリップボードにコピーします。コピーした内容は、テキストエディタなどにペーストしてください。
「閉じる」ボタンをクリックします。

![認証トークンの作成 5](images/2-009.png)

### 1-3.オブジェクト・ストレージ・ネームスペースの確認

画面右上の人型のマークが表示されている箇所をクリックします。さらに、展開されたメニューのテナンシ部分をクリックします。

![オブジェクト・ストレージ・ネームスペースの確認 1](images/2-010.png)

「オブジェクト・ストレージ・ネームスペース」をコピーして、テキストエディタなどにペーストしてください。

![オブジェクト・ストレージ・ネームスペースの確認 2](images/2-011.png)

### 1-4.Oracle Functions CLI contextの作成と設定確認

Oracle FunctionsをデプロイするためのにOracle Functions CLIを利用して環境を作成します。開発環境の設定は、fn updateコマンドを使用して行います。

最初に、Cloud Shell CLIを起動します。画面上部の「Cloud Shell」アイコンをクリックします。

![Oracle Functions CLI contextの作成と設定確認 1](images/2-012.png)

画面下方にコンソールが起動します。

![Oracle Functions CLI contextの作成と設定確認 2](images/2-013.png)


以下のコマンドを実行し、今選択されているcontextを確認します。`ap-tokyo-1 ` に「*」が付いていれば問題ありません。

```sh
fn list context
```
***コマンド結果***
```sh
CURRENT NAME            PROVIDER        API URL                                                 REGISTRY
*       ap-tokyo-1      oracle-cs       https://functions.ap-tokyo-1.oci.oraclecloud.com        nrt.ocir.io/<object-storage-namespace>/functions-handson-<ご自身の苗字>/
        default         oracle-cs
```

もし`ap-tokyo-1` に「*」が無い場合は、以下の手順を実行してください。

```sh
fn use context ap-tokyo-1 
```

以下のコマンドを実行し、コンパートメントIDを設定します。
`[compartment-ocid]` には、テキストエディタにペーストしたOCIDを入力します。


```sh
fn update context oracle.compartment-id [compartment-ocid]
```
***コマンド結果***
```sh
Current context updated oracle.compartment-id with ocid1.compartment.oc1..xxxxxxxxxx
```

以下のコマンドを実行し、OCIRを設定します。
`[オブジェクト・ストレージ・ネームスペース]` には、テキストエディタにペーストしたオブジェクト・ストレージ・ネームスペースを入力します。

```sh
fn update context registry nrt.ocir.io/[オブジェクト・ストレージ・ネームスペース]/functions-handson-<ご自身の苗字>
```
***コマンド結果***
```sh
Current context updated registry with kix.ocir.io/<object-storage-namespace>/functions-handson-<ご自身の苗字>
```

以下のコマンドを実行し、Oracle Functionsで使用するprofile名を設定します。
profile名は、今回 `DEFAULT`(OCI CLIセットアップ時に設定されるデフォルトのprofile名)を入力します。

```sh
fn update context oracle.profile "DEFAULT"
```
***コマンド結果***
```sh
Current context updated oracle.profile with DEFAULT
```

以下のコマンドを実行し、OCIRにログインできることを確認します。(本ハンズオンでは、ap-tokyo-1を使用しているので、”nrt”としています。)   ログインの際にユーザー名とパスワードを要求されます。
「Username」を確認します。

プロファイル名がユーザ名になります。  
プロファイル名をクリックします。

![ユーザネーム確認 1](images/2-014.png)

このプロファイル名をコピーして、テキストエディタ等にペーストしておきます。

![ユーザネーム確認 1](images/2-015.png)

ログインする際にオブジェクト・ストレージ・ネームスペースと合わせて入力してください。

「＜object-storage-namespace＞/＜username＞」

「Password」はテキストエディタにペーストした認証トークンを入力してください。パスワードは入力時表示されません。

```sh
docker login nrt.ocir.io
```
***コマンド結果***
```sh
Username: ＜object-storage-namespace＞/＜username＞
Password: ＜作成した認証トークン＞
WARNING! Your password will be stored unencrypted in /home/yutaka_ich/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
```

### 1-5.仮想クラウド・ネットワークの作成

Functionsで利用する仮想クラウド・ネットワークを作成します。
画面左上にあるハンバーガーメニューをクリックして、「ネットワーキング」-「仮想クラウド・ネットワーク」を選択します。

![VCNの作成 1](images/2-016.png)

コンパートメントが「hands-on-<ご自身の苗字>」になっていることを確認します。なっていない場合は、プルダウンメニューから選択してください。

![VCNの作成 2](images/2-017.png)

「VCNウィザードの起動」ボタンをクリックします。

![VCNの作成 3](images/2-018.png)

「インターネット接続性を持つVCNの作成」が選択されていることを確認して、「VCNウィザードの起動」ボタンをクリックします。

![VCNの作成 4](images/2-019.png)

基本情報で以下を設定します。

* VCN名：任意の名前(ここでは”Oracle Functions Handson”とします。)
* コンパートメント：hands-on-＜ご自身の苗字＞

![VCNの作成 5](images/2-020.png)

左下の「次へ」ボタンをクリックします。

![VCNの作成 6](images/2-021.png)

左下の「作成」ボタンをクリックします。

![VCNの作成 7](images/2-022.png)

仮想クラウド・ネットワークの作成が完了したことを確認します。

![VCNの作成 8](images/2-023.png)

左下の「仮想クラウド・ネットワークの表示」ボタンをクリックします。

![VCNの作成 9](images/2-024.png)

作成したVCNがリストにあることを確認します。

![VCNの作成 10](images/2-025.png)

以上で、仮想クラウド・ネットワークの作成は完了です。

### 1-6.Functions 実行環境作成

Functionsの実行環境を作成します。
画面左上にあるハンバーガーメニューをクリックして、「開発者サービス」-「アプリケーション」を選択します。

![アプリケーションの作成 1](images/2-026.png)

コンパートメントが「hands-on-<ご自身の苗字>」になっていることを確認します。なっていない場合は、プルダウンメニューから選択してください。

![アプリケーションの作成 2](images/2-017.png)

「アプリケーションの作成」ボタンをクリックします。

![アプリケーションの作成 3](images/2-027.png)

以下の設定をします。

名前：helloworld-app
Hands-on-＜ご自身の苗字＞のVCN：Oracle Functions Handson
Hands-on-＜ご自身の苗字＞のサブネット：パブリック・サブネットOracle Functions Handson(リージョナル)

![アプリケーションの作成 4](images/2-028.png)

左下の「作成」ボタンをクリックします。

![アプリケーションの作成 5](images/2-029.png)

以上で、Functions 実行環境の構築は完了です。

### 1-7.コンピュートの作成

ハンズオンで使用する仮想マシンインスタンスを作成します。

画面左上にあるハンバーガーメニューをクリックして、「コンピュート」-「インスタンス」を選択します。

![コンピュートの作成 1](images/1-013.png)

コンパートメントが「hands-on-<ご自身の苗字>」になっていることを確認します。なっていない場合は、プルダウンメニューから選択してください。

![コンピュートの作成 2](images/2-017.png)

「インスタンスの作成」ボタンをクリックします。

![コンピュートの作成 3](images/1-014.png)

「Shape」の「Change Shape」ボタンをクリックします。

![コンピュートの作成 4](images/2-030.png)

「シェイプ・シリーズ」で「Intel」を選択して、「VM.Standard2.1」にチェックを入れて、「シェイプの選択」ボタンをクリックします。

![コンピュートの作成 5](images/2-031.png)

「SSHキーの追加」で「秘密キーの保存」ボタンをクリックして、キーをダウンロードします。

![コンピュートの作成 6](images/1-018.png)

「作成」ボタンをクリックして、コンピュートを作成します。

![コンピュートの作成 7](images/1-019.png)

「実行中」であることを確認して、「パブリックIPアドレス」を確認します。

![コンピュートの作成 8](images/1-020.png)

Cloud Shellから作成したコンピュートインスタンスにSSH接続します。最初に、ダウンロードした「秘密キー」をCloud Shellにアップロードします。

Cloud Shellのハンバーガーメニューをクリックして、「アップロード」を選択します。

![コンピュートの作成 9](images/1-021.png)

「コンピュータから選択」リンクテキストをクリックして、ダウンロードした秘密キー「sssh-key-2021-xx-xx.key」ファイルを選択します。そして、「アップロード」ボタンをクリックします。

左上に表示されるダイアログは、「非表示」テキストリンクをクリックすると非表示できます。

ホームディレクトリに「秘密キー」がアップロードされるので、以下コマンドを実行して、コンピュートインスタンスにログインします。接続するIPアドレスは、事前に確認したパブリックIPアドレスを利用してください。  「Are you sure you want to continue connecting (yes/no)?」には、「yes」と入力してください。

```sh
chmod 400 ./ssh-key-2021-xx-xx.key
```
```sh
ssh -i ./ssh-key-2021-xx-xx.key opc@xx.xx.xx.xx
```
***コマンド結果***
```sh
The authenticity of host 'xx.xx.xx.xx (xx.xx.xx.xx)' can't be established.
ECDSA key fingerprint is SHA256:xu6Nv2aitxGnOm1pQUj3HgMwLLxExdLocD0QamFQCp8.
ECDSA key fingerprint is MD5:c7:59:36:0d:7a:60:9b:79:ef:85:a2:86:39:80:63:4d.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'xx.xx.xx.xx' (ECDSA) to the list of known hosts.
```

一度ログアウトします。

```sh
exit
```
***コマンド結果***
```
logout
Connection to xx.xx.xx.xx closed.
```
後ほど、このコンピュートインスタンスで作業します。  
これでコンピュートインスタンスの作成とログインは完了となります。

事前準備が完了しました。  
以下のページにアクセスしてください。  
サーバレスアプリケーションが構築に挑戦します。

https://oracle-japan.github.io/ocitutorials/cloud-native/functions-apigateway-for-beginners/

# Day2ハンズオン

Day2のハンズオンは、以下リンク先のページに従って行いますので、ページにアクセスしてください。

https://oracle-japan.github.io/ocitutorials/cloud-native/oke-for-advances/




