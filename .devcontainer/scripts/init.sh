#/bin/sh
sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
  -t jonathan \
  -p git \
  -p ssh-agent \
  -p yarn \
  -p gatsby \
  -p https://github.com/zsh-users/zsh-autosuggestions \
  -p https://github.com/zsh-users/zsh-completions

corepack enable

yarn set version berry
yarn dlx @yarnpkg/sdks vscode
yarn dlx gatsby-cli

cat << EOF >> ~/.zshrc

# set PATH so it includes user's yarn global bin if it exists
if [ -d "\$HOME/.yarn/bin" ] ; then
  PATH="\$(yarn global bin):\$PATH"
fi
EOF

gatsby telemetry --disable
