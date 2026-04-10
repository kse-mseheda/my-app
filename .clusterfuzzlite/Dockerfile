FROM gcr.io/oss-fuzz-base/base-builder-javascript
COPY . $SRC/my-app
WORKDIR $SRC/my-app
COPY .clusterfuzzlite/build.sh $SRC/build.sh
