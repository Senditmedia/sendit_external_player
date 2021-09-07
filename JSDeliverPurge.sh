curl -X POST \
  http://purge.jsdelivr.net/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
"path": [
"/gh/Senditmedia/senditcdn"
]
}'