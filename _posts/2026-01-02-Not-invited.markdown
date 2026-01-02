# Denied at the Door of My Own System

In recent days, after a distribution update, I started encountering an authentication issue. I genuinely felt foolish when my PC locked my session for **3 to 10 minutes** after three consecutive failed authentication attempts.

To rule out the obvious, I verified that the password was correct by unmasking it — and it was indeed the right one. Despite this, every time I entered my password to log into my session, the system kept reporting it as incorrect.

At this point, I cannot say with certainty what the root cause is. The first suspects are the **keyboard layout** and the recent **OS update** itself. When I have more time, I plan to investigate the issue more thoroughly.

For now, as a temporary workaround, I modified `/etc/sddm.conf` to enable automatic login:

```ini
[Autologin]
User=arma
Session=plasma.desktop
```

Note:
Replace `plasma.desktop`with your actual session (e.g. xfce, gnome, etc.).

I am writing this post primarily to document my actions and avoid forgetting what I changed.

— krpnt
