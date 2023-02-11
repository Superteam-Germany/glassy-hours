# Making your first solana program

- blog

User {
blogs_count: number,
blogs: [Blog1Pubkey, Blog2Pubkey]
}

Blog {
id: number;
title: String;
content: String;
author: UserPubkey;
}

const x = idl.accounts.blog.fetchAll()
idl.accounts.users.fetch(x.author)
