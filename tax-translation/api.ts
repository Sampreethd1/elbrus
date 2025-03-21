import { BlockBlobClient } from "@azure/storage-blob";

export const upload = async (file:any ) => {
    console.log('payload', file)
    const url = `https://hackathonmar25.blob.core.windows.net/team-elbrus-data-new/${file[0].name}?sv=2023-01-03&st=2025-03-21T10%3A10%3A22Z&se=2025-03-29T10%3A10%3A00Z&sr=c&sp=racwdxltf&sig=rzko5ASqJefZq19NqhZ%2BhtMek4gRn7xf2K7SKsuYc2k%3D`;
    const blockBlobClient = new BlockBlobClient(url);
    const response = await blockBlobClient.uploadData(file[0], {
        blockSize: 400 * 1024,
        concurrency: 20, // 20 concurrency
        onProgress: (ev: any) => { 
          console.log(ev)            
        },
        blobHTTPHeaders: {
          blobContentType: 'application/pdf',
        },
      });
    return response;
}
