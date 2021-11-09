# OLD PLAYER, GENERALLY NOT USED. PLEASE USE SENDIT_STANDALONE_PLAER REPO

1. In https://github.com/Senditmedia/sendit branch called senditcdn, copy the contents
2. Change for example the following values:
 - Update all links to jsdelivr, etc.
3. Obfuscate code using obfuscator.io
4. Clone obfuscated senditcdn repo into a new public repo for the client
5. Tag it with a release number
6. Run bash script from https://github.com/Senditmedia/sendit branch called senditcdn to alert jsdelivr of new changes to proxy it
7. Upload Index.html to s3
8. Setup cloud front distribution
9. Add DNS entry for that distribution
* Up to here we’ve only set up the front-end/iframe. If you want to update the video you need to create a new cloudfront distribution and proxy to a different ingest
