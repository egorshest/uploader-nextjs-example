import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);

export default function Home() {
  return (
    <main>
      <div>
      <lr-config
          ctx-name="my-uploader"
          pubkey="854722e0079fefc6d43b"
          maxLocalFileSizeBytes={10000000}
          imgOnly={true}
          sourceList="local, url, camera, dropbox"
      ></lr-config>
      <lr-file-uploader-regular
          css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.30.0/web/lr-file-uploader-regular.min.css"
          ctx-name="my-uploader"
          class="my-config"
      >
      </lr-file-uploader-regular>
      </div>
      <div>
      {/* Other content of your App */}

      {/* Include the Uploader component */}
      <lr-config ctx-name="my-uploader" pubkey="f7f8d4e0f5616dba10ef">
            </lr-config>
            <lr-file-uploader-minimal       css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.30.0/web/lr-file-uploader-minimal.min.css"
                ctx-name="my-uploader"
                class="my-config">
      </lr-file-uploader-minimal>
      {/* Rest of your App content */}
    </div>
    </main>
  )
}
