# META: timeout=long

import pytest

from tests.support.asserts import assert_dialog_handled, assert_error, assert_success


def get_named_cookie(session, name):
    return session.transport.send(
        "GET", "session/{session_id}/cookie/{name}".format(
            session_id=session.session_id,
            name=name))


@pytest.fixture
def check_user_prompt_closed_without_exception(session, create_dialog, create_cookie):
    def check_user_prompt_closed_without_exception(dialog_type, retval):
        create_cookie("foo", value="bar", path="/common/blank.html")

        create_dialog(dialog_type, text="cheese")

        response = get_named_cookie(session, "foo")
        cookie = assert_success(response)

        assert_dialog_handled(session, expected_text=dialog_type, expected_retval=retval)

        assert cookie["name"] == "foo"
        assert cookie["value"] == "bar"

    return check_user_prompt_closed_without_exception


@pytest.fixture
def check_user_prompt_closed_with_exception(session, create_dialog, create_cookie):
    def check_user_prompt_closed_with_exception(dialog_type, retval):
        create_cookie("foo", value="bar", path="/common/blank.html")

        create_dialog(dialog_type, text="cheese")

        response = get_named_cookie(session, "foo")
        assert_error(response, "unexpected alert open",
                     data={"text": "cheese"})

        assert_dialog_handled(session, expected_text=dialog_type, expected_retval=retval)

    return check_user_prompt_closed_with_exception


@pytest.fixture
def check_user_prompt_not_closed_but_exception(session, create_dialog, create_cookie):
    def check_user_prompt_not_closed_but_exception(dialog_type):
        create_cookie("foo", value="bar", path="/common/blank.html")

        create_dialog(dialog_type, text="cheese")

        response = get_named_cookie(session, "foo")
        assert_error(response, "unexpected alert open",
                     data={"text": "cheese"})

        assert session.alert.text == "cheese"
        session.alert.dismiss()

    return check_user_prompt_not_closed_but_exception


@pytest.mark.capabilities({"unhandledPromptBehavior": "accept"})
@pytest.mark.parametrize("dialog_type, retval", [
    ("alert", None),
    ("confirm", True),
    ("prompt", ""),
])
def test_accept(check_user_prompt_closed_without_exception, dialog_type, retval):
    check_user_prompt_closed_without_exception(dialog_type, retval)


@pytest.mark.capabilities({"unhandledPromptBehavior": "accept and notify"})
@pytest.mark.parametrize("dialog_type, retval", [
    ("alert", None),
    ("confirm", True),
    ("prompt", ""),
])
def test_accept_and_notify(check_user_prompt_closed_with_exception, dialog_type, retval):
    check_user_prompt_closed_with_exception(dialog_type, retval)


@pytest.mark.capabilities({"unhandledPromptBehavior": "dismiss"})
@pytest.mark.parametrize("dialog_type, retval", [
    ("alert", None),
    ("confirm", False),
    ("prompt", None),
])
def test_dismiss(check_user_prompt_closed_without_exception, dialog_type, retval):
    check_user_prompt_closed_without_exception(dialog_type, retval)


@pytest.mark.capabilities({"unhandledPromptBehavior": "dismiss and notify"})
@pytest.mark.parametrize("dialog_type, retval", [
    ("alert", None),
    ("confirm", False),
    ("prompt", None),
])
def test_dismiss_and_notify(check_user_prompt_closed_with_exception, dialog_type, retval):
    check_user_prompt_closed_with_exception(dialog_type, retval)


@pytest.mark.capabilities({"unhandledPromptBehavior": "ignore"})
@pytest.mark.parametrize("dialog_type", ["alert", "confirm", "prompt"])
def test_ignore(check_user_prompt_not_closed_but_exception, dialog_type):
    check_user_prompt_not_closed_but_exception(dialog_type)


@pytest.mark.parametrize("dialog_type, retval", [
    ("alert", None),
    ("confirm", False),
    ("prompt", None),
])
def test_default(check_user_prompt_closed_with_exception, dialog_type, retval):
    check_user_prompt_closed_with_exception(dialog_type, retval)
