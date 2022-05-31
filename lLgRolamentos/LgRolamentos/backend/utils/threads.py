import threading
import time


def presence_control_thread():
    time.sleep(10)
    from backend.classes.views.presence_control_views import PresenceControlViews
    threading.Thread(target=PresenceControlViews.watch_new_presence_control).start()

