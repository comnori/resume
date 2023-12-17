#/bin/sh
sudo chsh -s /bin/zsh $(whoami)

sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" \
  -t jonathan \
  -p git \
  -p ssh-agent \
  -p https://github.com/zsh-users/zsh-autosuggestions \
  -p https://github.com/zsh-users/zsh-completions

corepack enable

yarn global add gatsby-cli

cat << EOF >> ~/.profile
# set PATH so it includes user's private bin if it exists
if [ -d "\$HOME/.yarn/bin" ] ; then
  PATH="\$(yarn global bin):\$PATH"
fi
EOF

source ~/.profile
